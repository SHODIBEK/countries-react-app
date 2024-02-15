import styled from "styled-components";

import Select from "react-select";

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      backgroundColor: "var(--color-ui-base)",
      color: "var(--color-text)",
      borderRadius: "var(--radius)",
      padding: "0.25rem",
      border: "none",
      boxShadow: "var(--shadow)",
      height: "50px",
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: "pointer",
      color: "var(--color-text)",
      backgroundColor: state.isSelected
        ? "var(--color-ui-base)"
        : "var(--color-bg)",
    }),
  },
})`
  width: 200px;
  border-radius: var(--radius);
  font-family: var(--font-family);
  border: none;

  & > * {
    box-shadow: var(--shadow);
  }

  & > input {
    padding-left: 0.25rem;
  }

  & * {
    color: var(--text-color) !important;
  }

  & > div[id] {
    background-color: var(--color-ui-base);
  }
`;
