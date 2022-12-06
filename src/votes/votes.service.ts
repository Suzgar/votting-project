import { Injectable } from '@nestjs/common';
import { CreateVoteDto } from './dto/create-vote.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';
import { Vote } from './entities/vote.entity';

@Injectable()
export class VotesService {
  private votes: Vote[] = [];
  create(createVoteDto: CreateVoteDto) {
    if(this.findOne(createVoteDto.username)){
      return true;
    }
    this.votes.push(createVoteDto);
    return false;
  }

  findAll() {
    return this.votes;
  }

  findOne(name: string) {
    return this.votes.find(vote => vote.username === name);
  }
}
