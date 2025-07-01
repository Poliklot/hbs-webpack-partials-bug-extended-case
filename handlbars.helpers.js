export default (IS_DEVELOPMENT = false) => ({
  object: options => options.hash || {},
  array: (...args) => args.slice(0, -1),
});

