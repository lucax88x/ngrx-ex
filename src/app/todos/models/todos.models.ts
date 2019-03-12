export class Todo {
  isEditabled?: boolean;

  constructor(
    public id: string,
    public text: string,
    public isCompleted = false,
    public isVisible = false
  ) {}
}
