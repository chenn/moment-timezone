var moment = require("../../moment-timezone");

exports["Pacific/Easter"] = {

	"2013" : function (t) {
		t.equal(moment("2013-04-28T02:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2013-04-28T02:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2013-04-28T03:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:00:00", "2013-04-28T03:00:00+00:00 should be 21:00:00 in Pacific/Easter");
		t.equal(moment("2013-09-08T03:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2013-09-08T03:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2013-09-08T04:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "23:00:00", "2013-09-08T04:00:00+00:00 should be 23:00:00 in Pacific/Easter");

		t.equal(moment("2013-04-28T02:59:59+00:00").tz("Pacific/Easter").zone(), 300, "2013-04-28T02:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2013-04-28T03:00:00+00:00").tz("Pacific/Easter").zone(), 360, "2013-04-28T03:00:00+00:00 should be 360 minutes offset");
		t.equal(moment("2013-09-08T03:59:59+00:00").tz("Pacific/Easter").zone(), 360, "2013-09-08T03:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2013-09-08T04:00:00+00:00").tz("Pacific/Easter").zone(), 300, "2013-09-08T04:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-04-27T02:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2014-04-27T02:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2014-04-27T03:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:00:00", "2014-04-27T03:00:00+00:00 should be 21:00:00 in Pacific/Easter");
		t.equal(moment("2014-09-07T03:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2014-09-07T03:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2014-09-07T04:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "23:00:00", "2014-09-07T04:00:00+00:00 should be 23:00:00 in Pacific/Easter");

		t.equal(moment("2014-04-27T02:59:59+00:00").tz("Pacific/Easter").zone(), 300, "2014-04-27T02:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2014-04-27T03:00:00+00:00").tz("Pacific/Easter").zone(), 360, "2014-04-27T03:00:00+00:00 should be 360 minutes offset");
		t.equal(moment("2014-09-07T03:59:59+00:00").tz("Pacific/Easter").zone(), 360, "2014-09-07T03:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2014-09-07T04:00:00+00:00").tz("Pacific/Easter").zone(), 300, "2014-09-07T04:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-04-26T02:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2015-04-26T02:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2015-04-26T03:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:00:00", "2015-04-26T03:00:00+00:00 should be 21:00:00 in Pacific/Easter");
		t.equal(moment("2015-09-06T03:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2015-09-06T03:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2015-09-06T04:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "23:00:00", "2015-09-06T04:00:00+00:00 should be 23:00:00 in Pacific/Easter");

		t.equal(moment("2015-04-26T02:59:59+00:00").tz("Pacific/Easter").zone(), 300, "2015-04-26T02:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2015-04-26T03:00:00+00:00").tz("Pacific/Easter").zone(), 360, "2015-04-26T03:00:00+00:00 should be 360 minutes offset");
		t.equal(moment("2015-09-06T03:59:59+00:00").tz("Pacific/Easter").zone(), 360, "2015-09-06T03:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2015-09-06T04:00:00+00:00").tz("Pacific/Easter").zone(), 300, "2015-09-06T04:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-04-24T02:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2016-04-24T02:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2016-04-24T03:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:00:00", "2016-04-24T03:00:00+00:00 should be 21:00:00 in Pacific/Easter");
		t.equal(moment("2016-09-04T03:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2016-09-04T03:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2016-09-04T04:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "23:00:00", "2016-09-04T04:00:00+00:00 should be 23:00:00 in Pacific/Easter");

		t.equal(moment("2016-04-24T02:59:59+00:00").tz("Pacific/Easter").zone(), 300, "2016-04-24T02:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2016-04-24T03:00:00+00:00").tz("Pacific/Easter").zone(), 360, "2016-04-24T03:00:00+00:00 should be 360 minutes offset");
		t.equal(moment("2016-09-04T03:59:59+00:00").tz("Pacific/Easter").zone(), 360, "2016-09-04T03:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2016-09-04T04:00:00+00:00").tz("Pacific/Easter").zone(), 300, "2016-09-04T04:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-04-23T02:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2017-04-23T02:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2017-04-23T03:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:00:00", "2017-04-23T03:00:00+00:00 should be 21:00:00 in Pacific/Easter");
		t.equal(moment("2017-09-03T03:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2017-09-03T03:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2017-09-03T04:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "23:00:00", "2017-09-03T04:00:00+00:00 should be 23:00:00 in Pacific/Easter");

		t.equal(moment("2017-04-23T02:59:59+00:00").tz("Pacific/Easter").zone(), 300, "2017-04-23T02:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2017-04-23T03:00:00+00:00").tz("Pacific/Easter").zone(), 360, "2017-04-23T03:00:00+00:00 should be 360 minutes offset");
		t.equal(moment("2017-09-03T03:59:59+00:00").tz("Pacific/Easter").zone(), 360, "2017-09-03T03:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2017-09-03T04:00:00+00:00").tz("Pacific/Easter").zone(), 300, "2017-09-03T04:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-04-29T02:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2018-04-29T02:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2018-04-29T03:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:00:00", "2018-04-29T03:00:00+00:00 should be 21:00:00 in Pacific/Easter");
		t.equal(moment("2018-09-02T03:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2018-09-02T03:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2018-09-02T04:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "23:00:00", "2018-09-02T04:00:00+00:00 should be 23:00:00 in Pacific/Easter");

		t.equal(moment("2018-04-29T02:59:59+00:00").tz("Pacific/Easter").zone(), 300, "2018-04-29T02:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2018-04-29T03:00:00+00:00").tz("Pacific/Easter").zone(), 360, "2018-04-29T03:00:00+00:00 should be 360 minutes offset");
		t.equal(moment("2018-09-02T03:59:59+00:00").tz("Pacific/Easter").zone(), 360, "2018-09-02T03:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2018-09-02T04:00:00+00:00").tz("Pacific/Easter").zone(), 300, "2018-09-02T04:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-04-28T02:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2019-04-28T02:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2019-04-28T03:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:00:00", "2019-04-28T03:00:00+00:00 should be 21:00:00 in Pacific/Easter");
		t.equal(moment("2019-09-08T03:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2019-09-08T03:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2019-09-08T04:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "23:00:00", "2019-09-08T04:00:00+00:00 should be 23:00:00 in Pacific/Easter");

		t.equal(moment("2019-04-28T02:59:59+00:00").tz("Pacific/Easter").zone(), 300, "2019-04-28T02:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2019-04-28T03:00:00+00:00").tz("Pacific/Easter").zone(), 360, "2019-04-28T03:00:00+00:00 should be 360 minutes offset");
		t.equal(moment("2019-09-08T03:59:59+00:00").tz("Pacific/Easter").zone(), 360, "2019-09-08T03:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2019-09-08T04:00:00+00:00").tz("Pacific/Easter").zone(), 300, "2019-09-08T04:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-04-26T02:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2020-04-26T02:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2020-04-26T03:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:00:00", "2020-04-26T03:00:00+00:00 should be 21:00:00 in Pacific/Easter");
		t.equal(moment("2020-09-06T03:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2020-09-06T03:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2020-09-06T04:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "23:00:00", "2020-09-06T04:00:00+00:00 should be 23:00:00 in Pacific/Easter");

		t.equal(moment("2020-04-26T02:59:59+00:00").tz("Pacific/Easter").zone(), 300, "2020-04-26T02:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2020-04-26T03:00:00+00:00").tz("Pacific/Easter").zone(), 360, "2020-04-26T03:00:00+00:00 should be 360 minutes offset");
		t.equal(moment("2020-09-06T03:59:59+00:00").tz("Pacific/Easter").zone(), 360, "2020-09-06T03:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2020-09-06T04:00:00+00:00").tz("Pacific/Easter").zone(), 300, "2020-09-06T04:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-04-25T02:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2021-04-25T02:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2021-04-25T03:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:00:00", "2021-04-25T03:00:00+00:00 should be 21:00:00 in Pacific/Easter");
		t.equal(moment("2021-09-05T03:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2021-09-05T03:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2021-09-05T04:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "23:00:00", "2021-09-05T04:00:00+00:00 should be 23:00:00 in Pacific/Easter");

		t.equal(moment("2021-04-25T02:59:59+00:00").tz("Pacific/Easter").zone(), 300, "2021-04-25T02:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2021-04-25T03:00:00+00:00").tz("Pacific/Easter").zone(), 360, "2021-04-25T03:00:00+00:00 should be 360 minutes offset");
		t.equal(moment("2021-09-05T03:59:59+00:00").tz("Pacific/Easter").zone(), 360, "2021-09-05T03:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2021-09-05T04:00:00+00:00").tz("Pacific/Easter").zone(), 300, "2021-09-05T04:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-04-24T02:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2022-04-24T02:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2022-04-24T03:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:00:00", "2022-04-24T03:00:00+00:00 should be 21:00:00 in Pacific/Easter");
		t.equal(moment("2022-09-04T03:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2022-09-04T03:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2022-09-04T04:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "23:00:00", "2022-09-04T04:00:00+00:00 should be 23:00:00 in Pacific/Easter");

		t.equal(moment("2022-04-24T02:59:59+00:00").tz("Pacific/Easter").zone(), 300, "2022-04-24T02:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2022-04-24T03:00:00+00:00").tz("Pacific/Easter").zone(), 360, "2022-04-24T03:00:00+00:00 should be 360 minutes offset");
		t.equal(moment("2022-09-04T03:59:59+00:00").tz("Pacific/Easter").zone(), 360, "2022-09-04T03:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2022-09-04T04:00:00+00:00").tz("Pacific/Easter").zone(), 300, "2022-09-04T04:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-04-23T02:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2023-04-23T02:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2023-04-23T03:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:00:00", "2023-04-23T03:00:00+00:00 should be 21:00:00 in Pacific/Easter");
		t.equal(moment("2023-09-03T03:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2023-09-03T03:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2023-09-03T04:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "23:00:00", "2023-09-03T04:00:00+00:00 should be 23:00:00 in Pacific/Easter");

		t.equal(moment("2023-04-23T02:59:59+00:00").tz("Pacific/Easter").zone(), 300, "2023-04-23T02:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2023-04-23T03:00:00+00:00").tz("Pacific/Easter").zone(), 360, "2023-04-23T03:00:00+00:00 should be 360 minutes offset");
		t.equal(moment("2023-09-03T03:59:59+00:00").tz("Pacific/Easter").zone(), 360, "2023-09-03T03:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2023-09-03T04:00:00+00:00").tz("Pacific/Easter").zone(), 300, "2023-09-03T04:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-04-28T02:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2024-04-28T02:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2024-04-28T03:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:00:00", "2024-04-28T03:00:00+00:00 should be 21:00:00 in Pacific/Easter");
		t.equal(moment("2024-09-08T03:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2024-09-08T03:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2024-09-08T04:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "23:00:00", "2024-09-08T04:00:00+00:00 should be 23:00:00 in Pacific/Easter");

		t.equal(moment("2024-04-28T02:59:59+00:00").tz("Pacific/Easter").zone(), 300, "2024-04-28T02:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2024-04-28T03:00:00+00:00").tz("Pacific/Easter").zone(), 360, "2024-04-28T03:00:00+00:00 should be 360 minutes offset");
		t.equal(moment("2024-09-08T03:59:59+00:00").tz("Pacific/Easter").zone(), 360, "2024-09-08T03:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2024-09-08T04:00:00+00:00").tz("Pacific/Easter").zone(), 300, "2024-09-08T04:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-04-27T02:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2025-04-27T02:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2025-04-27T03:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:00:00", "2025-04-27T03:00:00+00:00 should be 21:00:00 in Pacific/Easter");
		t.equal(moment("2025-09-07T03:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2025-09-07T03:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2025-09-07T04:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "23:00:00", "2025-09-07T04:00:00+00:00 should be 23:00:00 in Pacific/Easter");

		t.equal(moment("2025-04-27T02:59:59+00:00").tz("Pacific/Easter").zone(), 300, "2025-04-27T02:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2025-04-27T03:00:00+00:00").tz("Pacific/Easter").zone(), 360, "2025-04-27T03:00:00+00:00 should be 360 minutes offset");
		t.equal(moment("2025-09-07T03:59:59+00:00").tz("Pacific/Easter").zone(), 360, "2025-09-07T03:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2025-09-07T04:00:00+00:00").tz("Pacific/Easter").zone(), 300, "2025-09-07T04:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-04-26T02:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2026-04-26T02:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2026-04-26T03:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:00:00", "2026-04-26T03:00:00+00:00 should be 21:00:00 in Pacific/Easter");
		t.equal(moment("2026-09-06T03:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2026-09-06T03:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2026-09-06T04:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "23:00:00", "2026-09-06T04:00:00+00:00 should be 23:00:00 in Pacific/Easter");

		t.equal(moment("2026-04-26T02:59:59+00:00").tz("Pacific/Easter").zone(), 300, "2026-04-26T02:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2026-04-26T03:00:00+00:00").tz("Pacific/Easter").zone(), 360, "2026-04-26T03:00:00+00:00 should be 360 minutes offset");
		t.equal(moment("2026-09-06T03:59:59+00:00").tz("Pacific/Easter").zone(), 360, "2026-09-06T03:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2026-09-06T04:00:00+00:00").tz("Pacific/Easter").zone(), 300, "2026-09-06T04:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-04-25T02:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2027-04-25T02:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2027-04-25T03:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:00:00", "2027-04-25T03:00:00+00:00 should be 21:00:00 in Pacific/Easter");
		t.equal(moment("2027-09-05T03:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2027-09-05T03:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2027-09-05T04:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "23:00:00", "2027-09-05T04:00:00+00:00 should be 23:00:00 in Pacific/Easter");

		t.equal(moment("2027-04-25T02:59:59+00:00").tz("Pacific/Easter").zone(), 300, "2027-04-25T02:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2027-04-25T03:00:00+00:00").tz("Pacific/Easter").zone(), 360, "2027-04-25T03:00:00+00:00 should be 360 minutes offset");
		t.equal(moment("2027-09-05T03:59:59+00:00").tz("Pacific/Easter").zone(), 360, "2027-09-05T03:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2027-09-05T04:00:00+00:00").tz("Pacific/Easter").zone(), 300, "2027-09-05T04:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-04-23T02:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2028-04-23T02:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2028-04-23T03:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:00:00", "2028-04-23T03:00:00+00:00 should be 21:00:00 in Pacific/Easter");
		t.equal(moment("2028-09-03T03:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2028-09-03T03:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2028-09-03T04:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "23:00:00", "2028-09-03T04:00:00+00:00 should be 23:00:00 in Pacific/Easter");

		t.equal(moment("2028-04-23T02:59:59+00:00").tz("Pacific/Easter").zone(), 300, "2028-04-23T02:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2028-04-23T03:00:00+00:00").tz("Pacific/Easter").zone(), 360, "2028-04-23T03:00:00+00:00 should be 360 minutes offset");
		t.equal(moment("2028-09-03T03:59:59+00:00").tz("Pacific/Easter").zone(), 360, "2028-09-03T03:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2028-09-03T04:00:00+00:00").tz("Pacific/Easter").zone(), 300, "2028-09-03T04:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-04-29T02:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2029-04-29T02:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2029-04-29T03:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:00:00", "2029-04-29T03:00:00+00:00 should be 21:00:00 in Pacific/Easter");
		t.equal(moment("2029-09-02T03:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2029-09-02T03:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2029-09-02T04:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "23:00:00", "2029-09-02T04:00:00+00:00 should be 23:00:00 in Pacific/Easter");

		t.equal(moment("2029-04-29T02:59:59+00:00").tz("Pacific/Easter").zone(), 300, "2029-04-29T02:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2029-04-29T03:00:00+00:00").tz("Pacific/Easter").zone(), 360, "2029-04-29T03:00:00+00:00 should be 360 minutes offset");
		t.equal(moment("2029-09-02T03:59:59+00:00").tz("Pacific/Easter").zone(), 360, "2029-09-02T03:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2029-09-02T04:00:00+00:00").tz("Pacific/Easter").zone(), 300, "2029-09-02T04:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-04-28T02:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2030-04-28T02:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2030-04-28T03:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:00:00", "2030-04-28T03:00:00+00:00 should be 21:00:00 in Pacific/Easter");
		t.equal(moment("2030-09-08T03:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2030-09-08T03:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2030-09-08T04:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "23:00:00", "2030-09-08T04:00:00+00:00 should be 23:00:00 in Pacific/Easter");

		t.equal(moment("2030-04-28T02:59:59+00:00").tz("Pacific/Easter").zone(), 300, "2030-04-28T02:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2030-04-28T03:00:00+00:00").tz("Pacific/Easter").zone(), 360, "2030-04-28T03:00:00+00:00 should be 360 minutes offset");
		t.equal(moment("2030-09-08T03:59:59+00:00").tz("Pacific/Easter").zone(), 360, "2030-09-08T03:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2030-09-08T04:00:00+00:00").tz("Pacific/Easter").zone(), 300, "2030-09-08T04:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-04-27T02:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2031-04-27T02:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2031-04-27T03:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:00:00", "2031-04-27T03:00:00+00:00 should be 21:00:00 in Pacific/Easter");
		t.equal(moment("2031-09-07T03:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2031-09-07T03:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2031-09-07T04:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "23:00:00", "2031-09-07T04:00:00+00:00 should be 23:00:00 in Pacific/Easter");

		t.equal(moment("2031-04-27T02:59:59+00:00").tz("Pacific/Easter").zone(), 300, "2031-04-27T02:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2031-04-27T03:00:00+00:00").tz("Pacific/Easter").zone(), 360, "2031-04-27T03:00:00+00:00 should be 360 minutes offset");
		t.equal(moment("2031-09-07T03:59:59+00:00").tz("Pacific/Easter").zone(), 360, "2031-09-07T03:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2031-09-07T04:00:00+00:00").tz("Pacific/Easter").zone(), 300, "2031-09-07T04:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-04-25T02:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2032-04-25T02:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2032-04-25T03:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:00:00", "2032-04-25T03:00:00+00:00 should be 21:00:00 in Pacific/Easter");
		t.equal(moment("2032-09-05T03:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2032-09-05T03:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2032-09-05T04:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "23:00:00", "2032-09-05T04:00:00+00:00 should be 23:00:00 in Pacific/Easter");

		t.equal(moment("2032-04-25T02:59:59+00:00").tz("Pacific/Easter").zone(), 300, "2032-04-25T02:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2032-04-25T03:00:00+00:00").tz("Pacific/Easter").zone(), 360, "2032-04-25T03:00:00+00:00 should be 360 minutes offset");
		t.equal(moment("2032-09-05T03:59:59+00:00").tz("Pacific/Easter").zone(), 360, "2032-09-05T03:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2032-09-05T04:00:00+00:00").tz("Pacific/Easter").zone(), 300, "2032-09-05T04:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-04-24T02:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2033-04-24T02:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2033-04-24T03:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:00:00", "2033-04-24T03:00:00+00:00 should be 21:00:00 in Pacific/Easter");
		t.equal(moment("2033-09-04T03:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2033-09-04T03:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2033-09-04T04:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "23:00:00", "2033-09-04T04:00:00+00:00 should be 23:00:00 in Pacific/Easter");

		t.equal(moment("2033-04-24T02:59:59+00:00").tz("Pacific/Easter").zone(), 300, "2033-04-24T02:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2033-04-24T03:00:00+00:00").tz("Pacific/Easter").zone(), 360, "2033-04-24T03:00:00+00:00 should be 360 minutes offset");
		t.equal(moment("2033-09-04T03:59:59+00:00").tz("Pacific/Easter").zone(), 360, "2033-09-04T03:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2033-09-04T04:00:00+00:00").tz("Pacific/Easter").zone(), 300, "2033-09-04T04:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-04-23T02:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2034-04-23T02:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2034-04-23T03:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:00:00", "2034-04-23T03:00:00+00:00 should be 21:00:00 in Pacific/Easter");
		t.equal(moment("2034-09-03T03:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2034-09-03T03:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2034-09-03T04:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "23:00:00", "2034-09-03T04:00:00+00:00 should be 23:00:00 in Pacific/Easter");

		t.equal(moment("2034-04-23T02:59:59+00:00").tz("Pacific/Easter").zone(), 300, "2034-04-23T02:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2034-04-23T03:00:00+00:00").tz("Pacific/Easter").zone(), 360, "2034-04-23T03:00:00+00:00 should be 360 minutes offset");
		t.equal(moment("2034-09-03T03:59:59+00:00").tz("Pacific/Easter").zone(), 360, "2034-09-03T03:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2034-09-03T04:00:00+00:00").tz("Pacific/Easter").zone(), 300, "2034-09-03T04:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-04-29T02:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2035-04-29T02:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2035-04-29T03:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:00:00", "2035-04-29T03:00:00+00:00 should be 21:00:00 in Pacific/Easter");
		t.equal(moment("2035-09-02T03:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2035-09-02T03:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2035-09-02T04:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "23:00:00", "2035-09-02T04:00:00+00:00 should be 23:00:00 in Pacific/Easter");

		t.equal(moment("2035-04-29T02:59:59+00:00").tz("Pacific/Easter").zone(), 300, "2035-04-29T02:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2035-04-29T03:00:00+00:00").tz("Pacific/Easter").zone(), 360, "2035-04-29T03:00:00+00:00 should be 360 minutes offset");
		t.equal(moment("2035-09-02T03:59:59+00:00").tz("Pacific/Easter").zone(), 360, "2035-09-02T03:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2035-09-02T04:00:00+00:00").tz("Pacific/Easter").zone(), 300, "2035-09-02T04:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-04-27T02:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2036-04-27T02:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2036-04-27T03:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:00:00", "2036-04-27T03:00:00+00:00 should be 21:00:00 in Pacific/Easter");
		t.equal(moment("2036-09-07T03:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2036-09-07T03:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2036-09-07T04:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "23:00:00", "2036-09-07T04:00:00+00:00 should be 23:00:00 in Pacific/Easter");

		t.equal(moment("2036-04-27T02:59:59+00:00").tz("Pacific/Easter").zone(), 300, "2036-04-27T02:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2036-04-27T03:00:00+00:00").tz("Pacific/Easter").zone(), 360, "2036-04-27T03:00:00+00:00 should be 360 minutes offset");
		t.equal(moment("2036-09-07T03:59:59+00:00").tz("Pacific/Easter").zone(), 360, "2036-09-07T03:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2036-09-07T04:00:00+00:00").tz("Pacific/Easter").zone(), 300, "2036-09-07T04:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-04-26T02:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2037-04-26T02:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2037-04-26T03:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:00:00", "2037-04-26T03:00:00+00:00 should be 21:00:00 in Pacific/Easter");
		t.equal(moment("2037-09-06T03:59:59+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "21:59:59", "2037-09-06T03:59:59+00:00 should be 21:59:59 in Pacific/Easter");
		t.equal(moment("2037-09-06T04:00:00+00:00").tz("Pacific/Easter").format("HH:mm:ss"), "23:00:00", "2037-09-06T04:00:00+00:00 should be 23:00:00 in Pacific/Easter");

		t.equal(moment("2037-04-26T02:59:59+00:00").tz("Pacific/Easter").zone(), 300, "2037-04-26T02:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2037-04-26T03:00:00+00:00").tz("Pacific/Easter").zone(), 360, "2037-04-26T03:00:00+00:00 should be 360 minutes offset");
		t.equal(moment("2037-09-06T03:59:59+00:00").tz("Pacific/Easter").zone(), 360, "2037-09-06T03:59:59+00:00 should be 360 minutes offset");
		t.equal(moment("2037-09-06T04:00:00+00:00").tz("Pacific/Easter").zone(), 300, "2037-09-06T04:00:00+00:00 should be 300 minutes offset");

		t.done();
	}
};