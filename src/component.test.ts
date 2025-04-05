import { describe, expect, it } from 'vitest';
import Component from './component';

describe('component', () => {
	describe('default style properties', () => {
		it('default style.display should be "inline-block"', () => {
			const component = new Component();
			expect(component.style.display).toBe('inline-block');
		});
	});
});
