import "./style.scss";
// import { setupCounter } from "./counter.ts";

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
const bases: Record<string, string> = {
  blackTea: "#8B4513",
  greenTea: "#C8E6C9",
  coffee:   "#6F4E37",
};

const creamers: Record<string, string> = {
  milk:  "AliceBlue",
  cream: "#F5F5DC",
  half:  "#FFFACD",
};

const syrups: Record<string, string> = {
  vanilla:  "#FFEFD5",
  caramel:  "#DAA520",
  hazelnut: "#6B4423",
};

function applyTemperature(input: HTMLInputElement): void {
  const container = document.getElementById(
    "condensation",
  ) as HTMLDivElement | null;
  if (!container) return;

  const children = container.children;

  for (let i = 0; i < children.length; i++) {
    const child = children[i] as HTMLElement;

    if (input.value === "hot") {
      child.className = "stream";
    } else {
      child.className = "flake";
    }
  }
}

function applyBase(input: HTMLInputElement): void {
  const baseElements = document.getElementsByClassName("base");

  if (baseElements.length === 0) return;

  const baseDiv = baseElements[0] as HTMLDivElement;

  const color = bases[input.value];
  if (!color) return;

  baseDiv.style.backgroundColor = color;
}

function applyCream(input: HTMLInputElement): void {
  const creamElements = document.getElementsByClassName("foam");

  if (creamElements.length === 0) return;

  const color = creamers[input.value];
  if (!color) return;
  for (let i = 0; i < creamElements.length; i++) {
    const element = creamElements[i] as HTMLDivElement;
    element.style.backgroundColor = color;
  }
}

function applySyrup(input: HTMLInputElement): void {
  const syrup = document.getElementsByClassName("syrup");
  if (syrup.length === 0) return;

  const syrupColor = syrups[input.value];
  if (!syrupColor) return;

  const syrupDivider = syrup[0] as HTMLDivElement;
  syrupDivider.style.setProperty("--syrup-color", syrupColor);
}

function setupSyrupListeners(): void {
  const syrupInput = document.querySelectorAll<HTMLInputElement>('input[name="syrup"]');

    for (let i = 0; i < syrupInput.length; i++) {
    const input = syrupInput[i];
    input.addEventListener("change", () => applySyrup(input))
  };

  const checked = document.querySelector<HTMLInputElement>('input[name="syrup"]:checked');
  if (!checked) return;
  applySyrup(checked);
}
setupSyrupListeners();

  function setupBaseListeners(): void {
    const inputValues = document.querySelectorAll<HTMLInputElement>('input[name="base"]');

    for (let i = 0; i < inputValues.length; i++) {
      const input = inputValues[i];
      input.addEventListener("change", () => applyBase(input));
    }

    const checked = document.querySelector<HTMLInputElement>('input[name="base"]:checked');
    if (!checked) return;
    applyBase(checked);
  }
  setupBaseListeners();

function setupCreamListeners(): void {
    const creams = document.querySelectorAll<HTMLInputElement>('input[name="cream"]');

    for (let i = 0; i < creams.length; i++) {
      const input = creams[i];
      input.addEventListener("change", () => applyCream(input));
    }

    const checked = document.querySelector<HTMLInputElement>('input[name="cream"]:checked');
    if (!checked) return;
    applyCream(checked);
  }
  setupCreamListeners();

  function setupTemperatureListeners(): void {
    const temperatures = document.querySelectorAll<HTMLInputElement>('input[name="temperature"]');

    for (let i = 0; i < temperatures.length; i++) {
      const input = temperatures[i];
      input.addEventListener("change", () => applyTemperature(input));
    }

    const checked = document.querySelector<HTMLInputElement>('input[name="temperature"]:checked');
    if (!checked) return;
    applyTemperature(checked);
  }
  setupTemperatureListeners();