// pages/api/audioclips/[year].ts
import { NextApiRequest, NextApiResponse } from 'next';
import AWS from 'aws-sdk';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Correctly extract the `year` from the URL
  const { year } = req.query; // This properly extracts the year from the URL

  console.log(req.query); // This should log the year value, e.g., { year: "2023" }

  console.log(year); // This should now log the actual year value, e.g., "2023"

  AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
  });

  const s3 = new AWS.S3();
  const params = {
    Bucket: 'soundalchemy.studio',
    Prefix: `${year}/`, // Correctly filter objects by the specified year
  };

  try {
    const data = await s3.listObjectsV2(params).promise();
    // Process and send the data as a response
    res.status(200).json(data.Contents); // You might want to format this or filter attributes
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching from S3' });
  }
}
