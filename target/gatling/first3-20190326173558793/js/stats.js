var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "1",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "238",
        "ok": "3440",
        "ko": "238"
    },
    "maxResponseTime": {
        "total": "3440",
        "ok": "3440",
        "ko": "238"
    },
    "meanResponseTime": {
        "total": "1839",
        "ok": "3440",
        "ko": "238"
    },
    "standardDeviation": {
        "total": "1601",
        "ok": "0",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1839",
        "ok": "3440",
        "ko": "238"
    },
    "percentiles2": {
        "total": "2640",
        "ok": "3440",
        "ko": "238"
    },
    "percentiles3": {
        "total": "3280",
        "ok": "3440",
        "ko": "238"
    },
    "percentiles4": {
        "total": "3408",
        "ok": "3440",
        "ko": "238"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1,
        "percentage": 50
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 50
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.222",
        "ok": "0.111",
        "ko": "0.111"
    }
},
contents: {
"req_home-page-reque-05c28": {
        type: "REQUEST",
        name: "Home page request",
path: "Home page request",
pathFormatted: "req_home-page-reque-05c28",
stats: {
    "name": "Home page request",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3440",
        "ok": "3440",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3440",
        "ok": "3440",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3440",
        "ok": "3440",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3440",
        "ok": "3440",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3440",
        "ok": "3440",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3440",
        "ok": "3440",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3440",
        "ok": "3440",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.111",
        "ok": "0.111",
        "ko": "-"
    }
}
    },"req_home-page-reque-2b520": {
        type: "REQUEST",
        name: "Home page request Redirect 1",
path: "Home page request Redirect 1",
pathFormatted: "req_home-page-reque-2b520",
stats: {
    "name": "Home page request Redirect 1",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "238",
        "ok": "-",
        "ko": "238"
    },
    "maxResponseTime": {
        "total": "238",
        "ok": "-",
        "ko": "238"
    },
    "meanResponseTime": {
        "total": "238",
        "ok": "-",
        "ko": "238"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "238",
        "ok": "-",
        "ko": "238"
    },
    "percentiles2": {
        "total": "238",
        "ok": "-",
        "ko": "238"
    },
    "percentiles3": {
        "total": "238",
        "ok": "-",
        "ko": "238"
    },
    "percentiles4": {
        "total": "238",
        "ok": "-",
        "ko": "238"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.111",
        "ok": "-",
        "ko": "0.111"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
