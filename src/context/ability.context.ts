import { createContext } from "react";
import { createContextualCan } from "@casl/react";
import { AbilityBuilder, PureAbility } from "@casl/ability";

export const AbilityContext = createContext(
  new AbilityBuilder(PureAbility).build(),
);
export const Can = createContextualCan(AbilityContext.Consumer);
