import Step from "../Step";
import Button from "../Button";
import Stepper from "../Stepper";
import CountrySelector from "../CountrySelector";
import countries from "../CountrySelector/countries";
import { DataProps, CountryType } from "@/interfaces";
import { Container, SelectorContainer, Content, Buttons } from "./styles";
import { FC, Fragment, HTMLAttributes, SetStateAction, SyntheticEvent, useEffect, useState } from "react";

const steps = ["País", "Liga", "Temporada", "Clube", "Informações"];

interface HStepperProps extends HTMLAttributes<HTMLDivElement> {
  data: DataProps;
  setData: (value: SetStateAction<DataProps>) => void;
};

const HStepper: FC<HStepperProps> = ({ data, setData, ...props }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleReset = (): void => setActiveStep(0);

  const handleNext = (): void => setActiveStep((prevActiveStep) => prevActiveStep + 1);

  const handleBack = (): void => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const isDisabled = (): boolean => {
    if (activeStep === 0) return data.country.flag === "" || data.country.flag === undefined;
    return false;
  };

  const handleCountryChange = (event: SyntheticEvent<Element, Event>, value: CountryType): void => {
    event.preventDefault();
    if (value === null) return;
    const findCountry = countries.find((country) => country.name === value.name);
    if (findCountry === undefined) return;
    setData({ ...data, country: value });
  };

  useEffect(() => {
    console.log(data.country);
  }, [data.country]);

  return (
    <Container {...props}>
      <Stepper>
        {steps.map((label, index) => {
          return (
            <Step
              key={label}
              label={label}
              step={index + 1}
              active={activeStep === index}
              completed={activeStep > index}
            />
          );
        })}
      </Stepper>
      {activeStep === steps.length - 1 ? (
        <Fragment>
          <Content>
            <p>All steps completed - you&apos;re finished</p>
          </Content>
          <Buttons>
            <div style={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Buttons>
        </Fragment>
      ) : (
        <Fragment>
          {
            activeStep === 0 &&
            <SelectorContainer>
              <label htmlFor="CountrySelector">Selecione um pais: </label>
              <CountrySelector
                id="CountrySelector"
                value={data.country}
                onChangeValue={handleCountryChange}
              />
            </SelectorContainer>
          }
          <Buttons>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </Button>
            <Button onClick={handleNext} disabled={isDisabled()}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Buttons>
        </Fragment>
      )}
    </Container>
  );
}

export default HStepper;