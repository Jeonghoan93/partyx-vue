import { Controller, Query, Get } from '@nestjs/common';

import { SearchService } from './search.service';
import { Users } from 'src/database/users.schema';

import { Query as ExpressQuery } from 'express-serve-static-core';

@Controller('api/search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get('users')
  async findUsers(@Query() query: ExpressQuery): Promise<Users[]> {
    return await this.searchService.findUsers(query);
  }
}
