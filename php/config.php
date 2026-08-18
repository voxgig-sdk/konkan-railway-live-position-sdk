<?php
declare(strict_types=1);

// KonkanRailwayLivePosition SDK configuration

class KonkanRailwayLivePositionConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "KonkanRailwayLivePosition",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://konkan-railway-api.vercel.app",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "train" => [],
                ],
            ],
            "entity" => [
        'train' => [
          'fields' => [
            [
              'name' => 'currentStation',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'delay',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'destination',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'lastUpdated',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'latitude',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'longitude',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'source',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'status',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'trainName',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'trainNumber',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'train',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/trains',
                  'parts' => [
                    'api',
                    'trains',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => '10103',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'train_number',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/trains/{trainNumber}',
                  'parts' => [
                    'api',
                    'trains',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'trainNumber' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return KonkanRailwayLivePositionFeatures::make_feature($name);
    }
}
