
package basic

import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import io.gatling.http.Predef._
import io.gatling.http.protocol.HttpProtocolBuilder

class first3 extends Simulation {
  val token = ""
  val headers = Map(
    "Content-Type" -> "application/json")

  val httpConf: HttpProtocolBuilder = http
    .baseUrl("https://www.n11.com")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .acceptEncodingHeader("gzip, deflate")
    .userAgentHeader("Mozilla/5.0 (Windows NT 5.1; rv:31.0) Gecko/20100101 Firefox/31.0")
  val scn: ScenarioBuilder = scenario("HomePageSimulation")
    .exec(http("LOGIN")
      .post("/giris-yap")
        .headers(headers)
        .formParam("email","hakantrg@gmail.com")
        .formParam("password","pass") //PASSWORD
        .check(status.is(200))
        .check(regex("""<meta content="(.*?)" name="token">""").saveAs("token"))
        //.check(jsonPath("$..token").exists.saveAs("auth"))

    )
    .pause(5)

    .exec(session => {
      val token = session("token").as[String]
      println("token:" + token)
      session    }       )


    .pause(5)
      .exec(http("get with session")
          .get("/hesabim/soru-cevap")
        //.header("Authorization", "${auth}")
        // .check(bodyString.saveAs("BODY"))
        .check(status.in(200 to 210))
        .check(bodyString.saveAs("responseBody"))


      )
    //.exec { session => println(session("responseBody").as[String]); session}


  //https://urun.n11.com/erkek-kol-saati/casio-efv-540d-1avudf-erkek-kol-saati-P330176523
    .exec(http("urun get request")
    .get("https://urun.n11.com/erkek-kol-saati/casio-efv-540d-1avudf-erkek-kol-saati-P330176523")
    //.header("Authorization", "${auth}")
    // .check(bodyString.saveAs("BODY"))
    .check(status.in(200 to 210))
    //.check(bodyString.saveAs("responseBody1"))


  )

    //.exec { session => println(session("responseBody1").as[String]); session}

  setUp(
    scn.inject(atOnceUsers(1))
  ).protocols(httpConf)
}