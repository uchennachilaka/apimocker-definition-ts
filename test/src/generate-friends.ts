import * as faker from 'faker';
import * as jsonfile from 'jsonfile';
import * as path from 'path';
import * as uuid from 'uuid';
import { Friend } from './models';

export function generateFriends(count = 5) {
  return [...Array(count).keys()].map(
    (index): Friend => {
      const data: Friend = {
        userId: index + 1,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        id: uuid.v4(),
      };
      // Generate email
      data.email = faker.internet.email(data.firstName, data.lastName);
      return data;
    }
  );
}

export default generateFriends;

/**
 * Generate data
 */
const outputData = generateFriends(7);
const DATA_DIR = path.resolve(__dirname, 'mocks');
const outputFile = `${DATA_DIR}/friends.mock.json`;
console.warn(`Writing data file: ${outputFile}`);
jsonfile.writeFileSync(outputFile, outputData, { spaces: 2 });
