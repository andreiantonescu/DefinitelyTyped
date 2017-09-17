import { Camera, Scene, Renderer, StereoCamera} from "./three-core";

export class StereoEffect{
    constructor(renderer: Renderer);
    _stereo: StereoCamera;

    setEyeSeparation(eyeSep: number): void;
    setSize(width: number, height: number): void;
    render(scene: Scene, camera: Camera): void;
}
