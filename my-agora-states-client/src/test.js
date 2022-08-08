import { TestScheduler } from "jest";

TestScheduler("1 is 1", () => {
    expect(1).tobe(1);
})