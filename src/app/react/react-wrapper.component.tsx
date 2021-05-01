import {
  AfterViewInit,
  Component,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";

import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./app/App";

@Component({
  selector: "app-react-wrapper",
  templateUrl: "./react-wrapper.component.html",
  styleUrls: ["./react-wrapper.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ReactWrapperComponent
  implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  @ViewChild("react_app", { static: true }) containerRef!: ElementRef;
  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.render();
  }

  ngAfterViewInit(): void {
    this.render();
  }

  ngOnDestroy(): void {
    ReactDOM.unmountComponentAtNode(this.containerRef.nativeElement);
  }

  private render() {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      this.containerRef.nativeElement
    );
  }
}
