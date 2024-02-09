import AWS from 'aws-sdk';

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

export default async function handler(req, res) {
  const params = {
    Bucket: 'soundalchemy.studio',
  };

  try {
    const data = await s3.listObjectsV2(params).promise();
    const yearSet = new Set();
    data.Contents.forEach(item => {
      const match = item.Key.match(/(\d{4})/); // Assuming year is part of the file name
      if (match) {
        yearSet.add(match[0]);
      }
    });

    const years = Array.from(yearSet).sort(); // Convert Set to Array and sort
    res.status(200).json(years);
  } catch (error) {
    console.error('Error fetching years from S3:', error);
    res.status(500).json({ error: "Failed to fetch years" });
  }
}
