import { type Dummy, type InsertDummy } from "@shared/schema";

export interface IStorage {
  getDummies(): Promise<Dummy[]>;
}

export class MemStorage implements IStorage {
  private dummies: Dummy[] = [];

  constructor() {
    this.dummies = [];
  }

  async getDummies(): Promise<Dummy[]> {
    return this.dummies;
  }
}

export const storage = new MemStorage();
