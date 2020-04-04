import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: 'src/generated/models.ts',
      },
    }),
  ],
})
export class AppModule {}
