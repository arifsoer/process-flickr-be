class ForbiddenError extends Error {
  constructor() {
    super();

    this.statusCode = 403;
    this.message = "Sorry, wrong address guys : Forbidden Request";
  }
}

export { ForbiddenError };
