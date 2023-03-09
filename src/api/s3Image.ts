import AWS from 'aws-sdk';
const { VITE_AWS_ACCESS_KEY_ID, VITE_AWS_SECRET_ACCESS_KEY } = import.meta.env;

const region = 'ap-northeast-2';
const bucket = 'team-jjinsa-hyperlink-bucket';

const s3 = new AWS.S3({
  region,
  accessKeyId: VITE_AWS_ACCESS_KEY_ID,
  secretAccessKey: VITE_AWS_SECRET_ACCESS_KEY,
});

type keyType = 'logo' | 'profile';

export const uploadFileToS3 = async (file: File, keyType: keyType) => {
  const fileType = file.type.split('/').pop();
  const uploadImage = s3
    .upload({
      Bucket: bucket,
      Key: `${keyType}/${self.crypto.randomUUID()}.${fileType}`,
      Body: file,
    })
    .promise();

  try {
    const res = await uploadImage;
    return res.Location;
  } catch (error) {
    console.error(error);
  }
};

export const deleteFileFromS3 = async (fileUrl: string) => {
  const key = fileUrl.split('/').slice(-2).join('/');

  const deleteImage = s3
    .deleteObject({
      Bucket: bucket,
      Key: key,
    })
    .promise();

  try {
    await deleteImage;
  } catch (error) {
    console.error(error);
  }
};
