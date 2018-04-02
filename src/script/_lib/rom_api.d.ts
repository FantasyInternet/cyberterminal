declare function log(msg: any): void
declare function setDisplayMode(mode: "text" | "indexed" | "rgb", width: number, height: number, displayWidth?: number, displayHeight?: number): void

declare function pset(x: number, y: number, r: number, g?: number, b?: number): void
declare function pget(x: number, y: number): number | number[]
declare function fillRect(x: number, y: number, width: number, height: number, r: number, g?: number, b?: number): void
declare function palette(id: number, r: number, g: number, b: number): void

declare function wait(milliseconds: number): Promise<any>
declare function waitForVsync(): Promise<number>
declare function commitDisplay(): Promise<number>

declare function read(filename: string): Promise<string>
declare function run(js: string, api: any): any
