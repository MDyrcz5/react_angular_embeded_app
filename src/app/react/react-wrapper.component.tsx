import {
  AfterViewInit,
  Component,
  ElementRef,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";

import React from "react";
import ReactDOM from "react-dom";
import ReactComponent from "./app/ReactComponent";
import { ChakraProvider } from "@chakra-ui/react";

@Component({
  selector: "app-react-wrapper",
  template: `<span #react_component></span>`,
  styleUrls: ["./react-wrapper.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ReactWrapperComponent
  implements OnChanges, OnDestroy, AfterViewInit {
  @ViewChild("react_component", { static: false }) containerRef!: ElementRef;

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
          <ReactComponent />
        </ChakraProvider>
      </React.StrictMode>,
      this.containerRef.nativeElement
    );
  }
}
