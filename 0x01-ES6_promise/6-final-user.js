import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const photo = uploadPhoto(fileName);
  const user = signUpUser(firstName, lastName);

  return Promise.allSettled([photo, user]).then((values) => {
    const profileResults = values.map((value) => ({
      status: value.status,
      value: value.status === 'fulfilled' ? value.value : value.reason,
    }));

    return profileResults;
  });
}
