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

import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { ChakraProvider } from "@chakra-ui/react";

@Component({
  selector: "app-react-wrapper",
  templateUrl: "./react-wrapper.component.html",
  styleUrls: ["./app/App.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ReactWrapperComponent
  implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  @ViewChild("react_app", { static: false }) containerRef!: ElementRef;
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
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </React.StrictMode>,
      this.containerRef.nativeElement
    );
  }
}
