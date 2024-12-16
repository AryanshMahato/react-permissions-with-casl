import "./App.css";
import { AbilityContext, Can } from "./context/ability.context.ts";
import { PermissionEnum } from "./permissions/permission.enum.ts";
import { useMemo } from "react";
import defineAbilities from "./ability/ability.ts";

// Fetch the config from API then set the value in AbilityContext.Provider
import config from "./config.json";

function App() {
  const abilityConfig = useMemo(() => defineAbilities(config), []);

  return (
    <AbilityContext.Provider value={abilityConfig}>
      <Can I={PermissionEnum.ViewFirstMessage}>
        <div>Should access</div>
      </Can>
      <Can I={PermissionEnum.ViewSecondMessage}>
        <div>Should not access</div>
      </Can>
    </AbilityContext.Provider>
  );
}

export default App;
