import React, { useState } from "react";
import StepProgress from "../../app/step-progress/step-progress";
import Carousel from "../../app/carousel/carousel";
import New1 from "./new1";
import New2 from "./new2";
import New3 from "./new3";
import Created from "../Created";

const New = () => {

    const [step, setStep] = useState(0);
    const [ttName, setTtName] = useState("");
    const [editCode, setEditCode] = useState("");
    const [ttRoute, setTtRoute] = useState("");
    const [created, setCreated] = useState(false);

    const steps = [
        "Give a name!",
        "Write a secret edit code",
        "Make your schedule"
    ]

    return (
        <div className="new-container">
            {created ? (
                <Created ttName={ttName} ttRoute={ttRoute} />
            ) :
                <>
                    <h1 className="step-heading"> <span className="step-count">Step {step + 1}:</span> {steps[step]}</h1>
                    <StepProgress step={step} n={steps.length} />
                    <Carousel getIndex={setStep}>
                        <New1 ttName={ttName} setTtName={setTtName} />
                        <New2 editCode={editCode} setEditCode={setEditCode} />
                        <New3 ttName={ttName} editCode={editCode} setCreated={setCreated} setTtRoute={setTtRoute} />
                    </Carousel>
                </>
            }
        </div>
    )
}

export default New;