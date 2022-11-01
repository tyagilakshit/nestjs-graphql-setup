import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from "@nestjs/mongoose";
import { UserModule } from './user/user.module';

@Module({
  imports: [BookModule, GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    subscriptions: {
      "graphql-ws": true,
    },
    autoSchemaFile: "schema.gql",
  }),
    MongooseModule.forRoot(
      `mongodb://localhost:27017/graphql`,
      {
        connectionFactory: (connection) => {
          // console.log("database connected!", connection)
          //    connection.plugin(require("mongoose-autopopulate"));
          return connection;
        },
      }
    ),
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
