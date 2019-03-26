package basic

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class first2 extends Simulation {
  val sessionHeaders = Map("Authorization" -> "Bearer ${authToken}",
    "Content-Type" -> "application/json")

  val httpConf = http
      .baseUrl("https://www.n11.com")
      //.acceptLanguageHeader("en-US,en;q=0.5")
      //.acceptEncodingHeader("gzip, deflate")
      //.userAgentHeader("Mozilla/5.0 (Windows NT 5.1; rv:31.0) Gecko/20100101 Firefox/31.0")
      //.proxy(Proxy("proxy.intertech.com.tr", 8080))
  val scn = scenario("HomePageSimulation")
    .exec(http("Home page request")
      .get("/"))
        .pause(5)
    .exec(http("github login")
      .post("https://github.com/login")
        .formParam("login_field","turgayh")
        .formParam("password","Ht41709416")
        .check(status.is("200"))
        .check(status.is("302"))
        .check(jsonPath("$..token").exists.saveAs("authToken"))
    )
        .pause(5)

        .exec(http("Login get example")
          .get("/turgayh/hellobee")
          .headers(sessionHeaders)
          //.check(status.is("200"))
      )
      setUp(
    scn.inject(atOnceUsers(1))
  ).protocols(httpConf)
}