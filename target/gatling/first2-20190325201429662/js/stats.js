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
        "total": "189",
        "ok": "5401",
        "ko": "189"
    },
    "maxResponseTime": {
        "total": "5401",
        "ok": "5401",
        "ko": "189"
    },
    "meanResponseTime": {
        "total": "2795",
        "ok": "5401",
        "ko": "189"
    },
    "standardDeviation": {
        "total": "2606",
        "ok": "0",
        "ko": "0"
    },
    "percentiles1": {
        "total": "2795",
        "ok": "5401",
        "ko": "189"
    },
    "percentiles2": {
        "total": "4098",
        "ok": "5401",
        "ko": "189"
    },
    "percentiles3": {
        "total": "5140",
        "ok": "5401",
        "ko": "189"
    },
    "percentiles4": {
        "total": "5349",
        "ok": "5401",
        "ko": "189"
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
        "total": "0.125",
        "ok": "0.062",
        "ko": "0.062"
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
        "total": "5401",
        "ok": "5401",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5401",
        "ok": "5401",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5401",
        "ok": "5401",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5401",
        "ok": "5401",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5401",
        "ok": "5401",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5401",
        "ok": "5401",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5401",
        "ok": "5401",
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
        "total": "0.062",
        "ok": "0.062",
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
        "total": "189",
        "ok": "-",
        "ko": "189"
    },
    "maxResponseTime": {
        "total": "189",
        "ok": "-",
        "ko": "189"
    },
    "meanResponseTime": {
        "total": "189",
        "ok": "-",
        "ko": "189"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "189",
        "ok": "-",
        "ko": "189"
    },
    "percentiles2": {
        "total": "189",
        "ok": "-",
        "ko": "189"
    },
    "percentiles3": {
        "total": "189",
        "ok": "-",
        "ko": "189"
    },
    "percentiles4": {
        "total": "189",
        "ok": "-",
        "ko": "189"
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
        "total": "0.062",
        "ok": "-",
        "ko": "0.062"
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
