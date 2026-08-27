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
                "slug" => "konkan-railway-live-position",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
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
              'short' => 'Current station where the train is located or last reported position',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'delay',
              'short' => 'Delay in minutes (positive for late, negative for early, 0 for on time)',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'destination',
              'short' => 'Destination station of the train',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'lastUpdated',
              'short' => 'Timestamp of the last position update',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'latitude',
              'short' => 'Current latitude coordinate of the train',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'longitude',
              'short' => 'Current longitude coordinate of the train',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'source',
              'short' => 'Source station of the train',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'status',
              'short' => 'Current status of the train',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'trainName',
              'short' => 'Name of the train',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'trainNumber',
              'short' => 'Unique identifier for the train',
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
