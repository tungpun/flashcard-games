import { Injectable } from '@angular/core';

const PREFERRED_VOICES = [
  'Samantha',
  'Karen',
  'Tessa',
  'Google US English',
  'Microsoft Zira',
  'Microsoft Jenny',
];

@Injectable({
  providedIn: 'root'
})
export class SpeechService {
  private synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
  private voice: SpeechSynthesisVoice | null = null;
  private voiceLoaded = false;

  constructor() {
    if (!this.synth) return;
    this.pickVoice();
    this.synth.addEventListener('voiceschanged', () => this.pickVoice());
  }

  speak(text: string): void {
    if (!this.synth) return;
    if (this.synth.speaking || this.synth.pending) {
      this.synth.cancel();
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.8;
    utterance.pitch = 1.1;
    if (this.voice) {
      utterance.voice = this.voice;
    }
    this.synth.speak(utterance);
  }

  private pickVoice(): void {
    if (!this.synth) return;
    const voices = this.synth.getVoices().filter(v => v.lang.startsWith('en'));
    if (voices.length === 0) return;

    for (const name of PREFERRED_VOICES) {
      const match = voices.find(v => v.name.includes(name));
      if (match) {
        this.voice = match;
        this.voiceLoaded = true;
        return;
      }
    }

    this.voice = voices[0];
    this.voiceLoaded = true;
  }
}
