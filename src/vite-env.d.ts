/// <reference types="vite/client" />
declare module 'react-slick'
declare module 'APlayer' {
  import { audio } from './components/Aplayer/type,'
  interface APlayerOptions {
    container: HTMLElement
    mini?: boolean
    autoplay?: boolean
    theme?: string
    loop?: 'all' | 'one' | 'none'
    order?: 'list' | 'random'
    preload?: 'none' | 'metadata' | 'auto'
    volume?: number
    mutex?: boolean
    listFolded?: boolean
    listMaxHeight?: string
    lrcType?: 0 | 1 | 2 | 3
    fixed?: boolean
    audio: audio[]
  }

  export default class APlayer {
    constructor(options: APlayerOptions)
    public init(): void
    public destroy(): void
    public setMode(mode: string): void
    public play(): void
    public mode: string
    public list: {
      audios: audio[]
      add(audio: audio[] | audio): void
      clear(): void
      switch(index: number): void
    }
  }
}
