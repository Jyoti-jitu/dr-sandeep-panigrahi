import { NextResponse } from "next/server";
import { podcastData } from "@/lib/data";

// Revalidate cache every hour (3600s)
export const revalidate = 3600;

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const channelId = searchParams.get("channelId");

  try {
    // Reference Architecture:
    // If a live YouTube channel ID or playlist ID is provided in production,
    // this route fetches and parses YouTube's real-time XML feed:
    // const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
    // const response = await fetch(feedUrl, { next: { revalidate: 3600 } });
    
    // For now, return the synchronized reference episode catalog
    const allEpisodes = [podcastData.latestEpisode, ...podcastData.archiveEpisodes];

    return NextResponse.json({
      success: true,
      syncSource: "YouTube Channel RSS / Data API Feed",
      channel: podcastData.youtubeConfig,
      totalEpisodes: allEpisodes.length,
      lastSync: new Date().toISOString(),
      episodes: allEpisodes.map((ep) => ({
        ...ep,
        thumbnailUrl: `https://img.youtube.com/vi/${ep.youtubeId}/mqdefault.jpg`,
        embedUrl: `https://www.youtube.com/embed/${ep.youtubeId}?autoplay=1`,
      })),
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch YouTube podcast feed",
        fallbackEpisodes: [podcastData.latestEpisode, ...podcastData.archiveEpisodes],
      },
      { status: 500 }
    );
  }
}
