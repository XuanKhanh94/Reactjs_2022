import ComponentAndProps from "./t4-component-and-props/ComponentAndProps";
import HelloWorld from "./t1-helloworld/HelloWorld";
import IntroducingJSX from "./t2-introducingJSX/IntroducingJSX";
import HieuSauState from "./t5-state-and-lifecycle-methods/HieuSauState";
import HandlingEvent from "./t6-handling-event/HandlingEvent";
import './khanh-style.css'
import RenderingElement from "./t3-rendering-element/RenderingElement";
import StateAndLifecycle from "./t5-state-and-lifecycle/StateAndLifecycle";
import ConditionalRendering from "./t7-conditional-rendering/ConditionalRendering";
import ListsAndKeys from "./t8-lists-and-keys/ListAndKeys";
import Form from "./t9-forms/Foms";
import LiftingStateUp from "./t10-lifting-state-up/LiftingStateUp";
import ComponentInheritance from "./t11-component-inheritance/ComponentInheritance";
import ThinkingInReact from "./t12-thinking-in-react/ThinkingInReact";

// 4.Components and Props
//      1. Function And Class Components
//        a. Function component: function KhanhReact(props) {
function KhanhReact(props) {
    return (
        <div>
            hello Khánh
            {/* 4. Components and Props */}
            {/*          2. Rendering a Component: <HieuSauState />,<HelloWorld />,<IntroducingJSX />,<RenderingElement />,<ComponentAndProps />
                                                  <StateAndLifecycle />,<HandlingEvent /> ,<ConditionalRendering />,<ListsAndKeys />,<Form />,<LiftingStateUp />,<ComponentInheritance />,<ThinkingInReact />*/}

            {/*          3. Composing Components: <HieuSauState />,<HelloWorld />,<IntroducingJSX />,<RenderingElement />,<ComponentAndProps />
                                                  <StateAndLifecycle />,<HandlingEvent /> ,<ConditionalRendering />,<ListsAndKeys />,<Form />,<LiftingStateUp />,<ComponentInheritance />,<ThinkingInReact />*/}

            {/*          4. Extracting components:<HieuSauState />,<HelloWorld />,<IntroducingJSX />,<RenderingElement />,<ComponentAndProps />
                                                  <StateAndLifecycle />,<HandlingEvent /> ,<ConditionalRendering />,<ListsAndKeys />,<Form />,<LiftingStateUp />,<ComponentInheritance />,<ThinkingInReact />*/}
            <HieuSauState />
            <hr />
            <HelloWorld />
            <hr />
            <IntroducingJSX />
            <hr />
            <RenderingElement />
            <hr />
            <ComponentAndProps />
            <hr />
            <StateAndLifecycle />
            <hr />
            <HandlingEvent />
            <hr />
            <ConditionalRendering />
            <hr />
            <ListsAndKeys />
            <hr />
            <Form />
            <hr />
            <LiftingStateUp />
            <hr />
            <ComponentInheritance />
            <hr />
            <ThinkingInReact />
        </div>
    )
}
export default KhanhReact;