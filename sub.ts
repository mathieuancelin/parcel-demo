import { add } from './add.rs'

export class Calculator {
	sub(a: number, b: number): number {
		return a - b;
	}
	add(a: number, b: number): number {
		return add(a, b);
	}
}