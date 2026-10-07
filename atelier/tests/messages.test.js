import { test } from 'node:test';
import assert from 'node:assert/strict';
import { estMessage } from '../public/js/brain.js';

test('estMessage : un vrai message donne true', () => {
  assert.equal(estMessage({ role: 'user', text: 'salut' }), true);
});

test('estMessage : null donne false', () => {
  assert.equal(estMessage(null), false);
});

test('estMessage : un rôle inconnu donne false', () => {
  assert.equal(estMessage({ role: 'pirate', text: 'salut' }), false);
});

test('estMessage : un texte qui est un nombre donne false', () => {
  assert.equal(estMessage({ role: 'user', text: 42 }), false);
});
