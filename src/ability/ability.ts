import { AbilityBuilder, PureAbility } from "@casl/ability";
import { PermissionEnum } from "../permissions/permission.enum.ts";

/**
 * @param {string[]} config - array of configs, example: "CreateUser", "ViewUser"
 * @param {string} role - role of the user, example: "admin". If admin is passed then all available permissions will be allowed to the user.
 * */
export default function defineAbilities(config: string[], role?: string) {
  const ability = new AbilityBuilder(PureAbility);

  config.forEach((config) => {
    ability.can(config);
  });

  if (role === "admin") {
    Object.keys(PermissionEnum).forEach((permission) => {
      ability.can(permission);
    });
  }

  return ability.build();
}
