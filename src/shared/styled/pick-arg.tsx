export function PickArg<T>(argName: keyof T) {
  return (args: { [P in keyof T]: T[P] }) => args[argName];
}
