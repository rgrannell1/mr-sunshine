
import {
  Context,
  Handler,
  HandlerEvent,
  NetlifyFunction,
} from "@netlify/functions";

import * as SunCalc from 'https://raw.githubusercontent.com/rgrannell1/suncalc/master/suncalc.ts'

type SolarOptions = {
  date: Date,
  latitude: number,
  longitude: number,
}

function getSolarInformation(opts: SolarOptions) {
  const times = SunCalc.getTimes(opts.date, opts.latitude, opts.longitude);

  const xxx = SunCalc.getPosition(times.sunrise, opts.latitude, opts.longitude);

  console.log(times)
  console.log(xxx)
}

const handler: Handler = async (event: HandlerEvent, context: Context) => {
  const message = getSolarInformation({
    date: new Date(),
    latitude: 51.5,
    longitude: -0.1,
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      message
    }),
  }
}

export { handler };
