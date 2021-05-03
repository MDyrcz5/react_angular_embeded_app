# React Embeded in Angular - Easy way 🧨

## TL;DR

Demo of a simple and straightforward way to embed React components into Angular, in order to build a bridge between the frameworks. Solution to quickly and gradually migrate old components to React, until the entire application is rewritten in React.

---

### Requirements

- Styling (css/scss) must work
- React components must not be aware of being embedded in Angular
- Change detection and props binding must work
- Class and functional react components must be able to control state
- Must be incorporated into the same source project and use the same build pipelines
- Being simple and easy to implement

## Implementation

### 1. Add React basic dependencies

**package.json**

```
"dependencies": {
  ...
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "react-router-dom": "^5.2.0",
  ...
  },
  "devDependencies": {
  ...
    "@types/react": "^17.0.3",
    "@types/react-dom": "^17.0.3",
    "@types/react-router-dom": "^5.1.7",
  ...
  }
```

### 2. Add those lines in tsconfig.json file to let Angular know about React code in our project and enable IVY.

```
  "compileOnSave": false,
  "compilerOptions": {
    ...
    "module": "esnext",
    "allowJs": true,
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react",
    "allowSyntheticDefaultImports": true
  },
  "angularCompilerOptions": {
    ...
    "enableIvy": true,
    "allowEmptyCodegenFiles": true
    ...
  }
```

### 3. Implement React Wrapper Component

This kind of wrapper should be created per each React component. The wrapper is responsible for detecting changes and re-rendering the component as a result of what props take effect, when wrapper is destroyed React component gets unmounted.

Major solution:

- File extension is .tsx
- Wrapped Component styles are imported via Angular component styleUrls, so as to be bundled by Webpack
- Encapsulation is changed to `none`
- containerRef is created for mounting component into lifecycle hooks. OnChanges and AfterViewInit are set to render the component
- OnDestroy React component gets unmounted

Angular @Input and @Output will represent React Props that would be passed into component.

**react-wrapper.component.tsx**

```
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
```

### 4. Other added changes

**React**

- Providing Chakra ui lib
- React Router
- Form build with `react-hook-form`

**Angular**

- Routing
- Side nav build with `Angular Material`

## Run

**Install Deps.**

`yarn` or `npm install`

**Start in Devmode**

`yarn start` or `npm start`

## What to change or improve?

- Inform Angular client that the router inside React app has changed
- Fix CSS styles to get bundled by webpack not only with Angular's styleUrls

# Screens
![image](https://user-images.githubusercontent.com/23345904/116921776-c3f86b80-ac54-11eb-9f09-00bf8b83991e.png)

