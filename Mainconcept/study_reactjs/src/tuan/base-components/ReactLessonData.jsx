
import HelloWorld from "../react-lesson/t-1-hello-word/HelloWorld";
import IntroducingJSX from "../react-lesson/t-2-IntroducingJSX/IntroducingJSX";
import RenderingElements from "../react-lesson/t-3-rendering-elements/RenderingElements";
import ComponentsAndProps from "../react-lesson/t-4-components-and-props/ComponentsAndProps";
import StateAndLifecycle from "../react-lesson/t-5-state-and-lifecycle/StateAndLifecycle";
import HandlingEvents from "../react-lesson/t-6-handling-events/HandlingEvents";
import ConditionalRendering from "../react-lesson/t-7-conditional-rendering/ConditionalRendering";
import ListsAndKeys from "../react-lesson/t-8-lists-and-keys/ListsAndKeys";

export function reactLessonData(){
  return {
    lessonList : [
      { 
        component: <HelloWorld />, 
        id: "HelloWorld", 
        text: "Hello World", 
        description: "'Hello world' will be rendered by render method of root element, this is so cool!" 
      },
      { component: <IntroducingJSX />, id: "IntroducingJSX", text: "Introducing JSX", description: "" },
      { component: <RenderingElements />, id: "RenderingElements", text: "Rendering Elements", description: "" },
      { component: <ComponentsAndProps />, id: "ComponentsAndProps", text: "Components and Props", description: "" },
      { component: <StateAndLifecycle />, id: "StateAndLifecycle", text: "State and Lifecycle", description: "" },
      { component: <HandlingEvents />, id: "HandlingEvents", text: "Handling Events", description: "" },
      { component: <ConditionalRendering />, id: "ConditionalRendering", text: "Conditional Rendering", description: "" },
      { component: <ListsAndKeys />, id: "ListsAndKeys", text: "Lists and Keys", description: "" },
      { component: null, id: "Forms", text: "Forms", description: "" },
      { component: null, id: "LiftingStateUp", text: "Lifting State Up", description: "" },
      { component: null, id: "CompositionVsInheritance", text: "Composition vs Inheritance", description: "" },
      { component: null, id: "ThinkingInReact", text: "Thinking In React", description: "" }
    ]
  }
}