/// <reference path="../pb_data/types.d.ts" />

onAfterBootstrap((e) => {
    console.log("Yay");
    const id = 1;
});

cronAdd("hello", "*/2 * * * *", () => {
    console.log("hejq");
    /**
     * 1. Gör om statisk const data till att hämta från api
     * 2. se om någon mer data bör sparas, se const json = ...
     * 3. spara under misc tablet med name st-hbg-c-departures med value json
     */

    const res = $http.send({
        url: "https://api.resrobot.se/v2.1/departureBoard?id=740000044&format=json&accessId=6feca849-f694-4a55-a000-0d703d98f55d", //API url
        method: "GET",
        headers: { "content-type": "application/json" },
        timeout: 120,
    });

    const json = res.json["Departure"].map((dep) => ({
        line: dep.ProductAtStop.line, // 1
        direction: dep.direction, // Råå Kattegattsgatan (Helsingborg kn)"
        time: dep.time, // 12:12:00
    }));

    console.log(JSON.stringify(json));
    console.log("hej");

    const miscCollection = $app.dao().findCollectionByNameOrId("misc"); // Hämta misc tablet från databasen

    const recordId = "st-hbg-c-departures"; // Namnet på recordet som ska sparas
    let HbgCRecord;
    try {
        // Försök hämta raden från databasen, kastar error om den inte finns
        HbgCRecord = $app.dao().findFirstRecordByData("misc", "name", recordId);
    } catch (error) {
        // Skapa ny rad om den inte finns
        HbgCRecord = new Record(miscCollection, {
            name: recordId,
        });
    }

    // Spara json i recordet
    HbgCRecord.set("value", json);

    $app.dao().saveRecord(HbgCRecord);
});
