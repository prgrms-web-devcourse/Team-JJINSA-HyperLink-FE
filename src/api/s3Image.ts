import AWS from 'aws-sdk';
const { VITE_AWS_ACCESS_KEY_ID, VITE_AWS_SECRET_ACCESS_KEY } = import.meta.env;

const region = 'ap-northeast-2';
const bucket = 'team-jjinsa-hyperlink-bucket';

AWS.config.update({
  region,
  accessKeyId: VITE_AWS_ACCESS_KEY_ID,
  secretAccessKey: VITE_AWS_SECRET_ACCESS_KEY,
});

type keyType = 'logo' | 'profile';

export const uploadFileToS3 = async (file: File, keyType: keyType) => {
  const upload = new AWS.S3.ManagedUpload({
    params: {
      Bucket: bucket,
      Key: `${keyType}/${file.name}`,
      Body: file,
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
