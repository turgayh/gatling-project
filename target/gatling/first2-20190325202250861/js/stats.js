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
        "total": "414",
        "ok": "4086",
        "ko": "414"
    },
    "maxResponseTime": {
        "total": "4086",
        "ok": "4086",
        "ko": "414"
    },
    "meanResponseTime": {
        "total": "2250",
        "ok": "4086",
        "ko": "414"
    },
    "standardDeviation": {
        "total": "1836",
        "ok": "0",
        "ko": "0"
    },
    "percentiles1": {
        "total": "2250",
        "ok": "4086",
        "ko": "414"
    },
    "percentiles2": {
        "total": "3168",
        "ok": "4086",
        "ko": "414"
    },
    "percentiles3": {
        "total": "3902",
        "ok": "4086",
        "ko": "414"
    },
    "percentiles4": {
        "total": "4049",
        "ok": "4086",
        "ko": "414"
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
        "total": "0.133",
        "ok": "0.067",
        "ko": "0.067"
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
        "total": "4086",
        "ok": "4086",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4086",
        "ok": "4086",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4086",
        "ok": "4086",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4086",
        "ok": "4086",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4086",
        "ok": "4086",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4086",
        "ok": "4086",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4086",
        "ok": "4086",
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
        "total": "0.067",
        "ok": "0.067",
        "ko": "-"
    }
}
    },"req_github-login-8ca4c": {
        type: "REQUEST",
        name: "github login",
path: "github login",
pathFormatted: "req_github-login-8ca4c",
stats: {
    "name": "github login",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "414",
        "ok": "-",
        "ko": "414"
    },
    "maxResponseTime": {
        "total": "414",
        "ok": "-",
        "ko": "414"
    },
    "meanResponseTime": {
        "total": "414",
        "ok": "-",
        "ko": "414"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "414",
        "ok": "-",
        "ko": "414"
    },
    "percentiles2": {
        "total": "414",
        "ok": "-",
        "ko": "414"
    },
    "percentiles3": {
        "total": "414",
        "ok": "-",
        "ko": "414"
    },
    "percentiles4": {
        "total": "414",
        "ok": "-",
        "ko": "414"
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
        "total": "0.067",
        "ok": "-",
        "ko": "0.067"
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
