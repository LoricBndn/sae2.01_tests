import { assertThrows } from "https://deno.land/std@0.220.0/assert/assert_throws.ts";
import { assertEquals } from "https://deno.land/std@0.220.0/assert/mod.ts";

import { UnClient } from "../src/modele/data_client.ts";

Deno.test("idCli par défaut", () => {
    const unClient = new UnClient()
    assertEquals(unClient.idCli, 0);
});

Deno.test("civCli par défaut", () => {
    const unClient = new UnClient()
    assertEquals(unClient.civCli, "");
});

Deno.test("nomCli par défaut", () => {
    const unClient = new UnClient()
    assertEquals(unClient.nomCli, "");
});

Deno.test("prenomCli par défaut", () => {
    const unClient = new UnClient()
    assertEquals(unClient.prenomCli, "");
});

Deno.test("telCli par défaut", () => {
    const unClient = new UnClient()
    assertEquals(unClient.telCli, "");
});

Deno.test("melCli par défaut", () => {
    const unClient = new UnClient()
    assertEquals(unClient.melCli, "");
});

Deno.test("adrCli par défaut", () => {
    const unClient = new UnClient()
    assertEquals(unClient.adrCli, "");
});

Deno.test("cpCli par défaut", () => {
    const unClient = new UnClient()
    assertEquals(unClient.cpCli, "");
});

Deno.test("communeCli par défaut", () => {
    const unClient = new UnClient()
    assertEquals(unClient.communeCli, "");
});

Deno.test("tauxmaxRemiseCli par défaut", () => {
    const unClient = new UnClient()
    assertEquals(unClient.tauxmaxRemiseCli, 0);
});