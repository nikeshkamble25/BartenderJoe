import { Directive, ElementRef, HostListener } from '@angular/core';
import { LoggerService } from '../_services/logger-service';

@Directive({
  selector: '[appFascetTracer]'
})
export class FascetTracerDirective {
  private _el: ElementRef;
  constructor(el: ElementRef, private logger: LoggerService) {
    this._el = el;
  }
  @HostListener('keydown', ['$event']) onMouseEnter(event: KeyboardEvent) {
    let logText = (new Date()).toTimeString();
    logText += " - ";
    logText += "[KEYPRS]";
    logText += " - ";
    logText += "\"" + event.key + "\"";
    logText += " key was pressed";
    this.logger.Log(logText);
  }
  @HostListener('click') onClick() {
    let logText = (new Date()).toTimeString();
    logText += " - ";
    logText += "[" + this._el.nativeElement.nodeName + "]";
    logText += " - ";
    if(this._el.nativeElement.innerText!=""){
     logText += "\"" + this._el.nativeElement.innerText + "\"";
    }
    logText += " " + this._el.nativeElement.nodeName.toLowerCase() + " was clicked";
    this.logger.Log(logText);
  }
}
