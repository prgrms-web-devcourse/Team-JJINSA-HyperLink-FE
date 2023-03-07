import AWS from 'aws-sdk';
import axios from 'axios';
const { VITE_AWS_ACCESS_KEY_ID, VITE_AWS_SECRET_ACCESS_KEY } = import.meta.env;

const region = 'ap-northeast-2';
const bucket = 'team-jjinsa-hyperlink-bucket';

AWS.config.update({
  region: region,
  accessKeyId: VITE_AWS_ACCESS_KEY_ID,
  secretAccessKey: VITE_AWS_SECRET_ACCESS_KEY,
});

export const handleFileInput = async (file) => {
  const upload = new AWS.S3.ManagedUpload({
    params: {
      Bucket: bucket, // 버킷 이름
      Key: file.name,
      Body: file, // 파일 객체
    },
  });

  const promise = upload.promise();

  try {
    const res = await promise;
    return res.Location;
  } catch (error) {
    console.error(error);
  }
};
