
import { scrapeNoon } from "../services/scraping/noon.service.js";
import { scrapeSharafDG } from "../services/scraping/sharafdg.service.js";

const runScrapers = async () => {
  try {
    const searchTerm = process.argv[2] || "iphone 15";

    const [noonData, sharafData] = await Promise.allSettled([
      scrapeNoon(searchTerm),
      scrapeSharafDG(searchTerm)
    ]);

    const results = {
      search_term: searchTerm,
      noon: {
        status: noonData.status,
        count: noonData.status === 'fulfilled' ? noonData.value.length : 0,
        data: noonData.status === 'fulfilled' ? noonData.value : [],
        error: noonData.status === 'rejected' ? noonData.reason.message : null
      },
      sharafdg: {
        status: sharafData.status,
        count: sharafData.status === 'fulfilled' ? sharafData.value.length : 0,
        data: sharafData.status === 'fulfilled' ? sharafData.value : [],
        error: sharafData.status === 'rejected' ? sharafData.reason.message : null
      },
      timestamp: new Date().toISOString()
    };

    console.log(JSON.stringify(results, null, 2));
    process.exit(0);
  } catch (error) {
    console.error("Critical error running scrapers:", error);
    process.exit(1);
  }
};

runScrapers();
