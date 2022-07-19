import { Injectable } from '@nestjs/common';
import { createConnection, Repository } from 'typeorm';
import { Index } from './index.entity';

@Injectable()
export class IndexService {
  async getIndexList() {
    // const result = await getConnection().createQueryBuilder().select().from(Index,'index');
    createConnection(/*...*/)
      .then(async (connection) => {
        let index = new Index();
        index.name = 'Me and Bears';
        index.description = 'I am near polar bears';
        index.filename = 'index-with-bears.jpg';
        index.views = 1;
        index.isPublished = true;

        let indexRepository = connection.getRepository(Index);

        await indexRepository.save(index);
        console.log('Index has been saved');

        let savedPhotos = await indexRepository.find();
        console.log('All indexs from the db: ', savedPhotos);
        return savedPhotos;
      })
      .catch((error) => console.log(error));
  }
}
