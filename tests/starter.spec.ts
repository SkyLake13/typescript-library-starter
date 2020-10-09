import {Starter} from '../src';

describe('starter', () => {
    it('show instantiate', () => {
        const starter = new Starter();
        expect(starter).toBeDefined();
    });
});